const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");

const IMG_DIR = path.join(__dirname, "../static/img");
const BACKUP_DIR = path.join(__dirname, "../static/img-original");

async function optimizeImages() {
  console.log("🖼️  Optimisation des images...");

  // Créer un backup si nécessaire
  if (!fs.existsSync(BACKUP_DIR)) {
    console.log("📦 Création du backup des images originales...");
    await fs.copy(IMG_DIR, BACKUP_DIR);
  }

  // Trouver toutes les images
  const images = glob.sync(`${IMG_DIR}/**/*.{jpg,jpeg,png,webp}`, {
    nodir: true,
  });

  console.log(`📸 ${images.length} images trouvées`);

  let optimized = 0;
  let skipped = 0;

  for (const imagePath of images) {
    try {
      const ext = path.extname(imagePath).toLowerCase();
      const stats = await fs.stat(imagePath);
      const originalSize = stats.size;

      // Lire l'image avec sharp
      let image = sharp(imagePath);
      const metadata = await image.metadata();

      // Optimiser selon le format
      if (ext === ".jpg" || ext === ".jpeg") {
        image = image.jpeg({ quality: 80, progressive: true });
      } else if (ext === ".png") {
        image = image.png({ quality: 80, compressionLevel: 9 });
      } else if (ext === ".webp") {
        image = image.webp({ quality: 80 });
      }

      // Sauvegarder (écrase l'original)
      await image.toFile(imagePath + ".tmp");
      await fs.move(imagePath + ".tmp", imagePath, { overwrite: true });

      const newStats = await fs.stat(imagePath);
      const newSize = newStats.size;
      const saved = (((originalSize - newSize) / originalSize) * 100).toFixed(
        1
      );

      if (newSize < originalSize) {
        console.log(`  ✓ ${path.basename(imagePath)} - ${saved}% réduit`);
        optimized++;
      } else {
        // Si l'image optimisée est plus grosse, restaurer l'originale
        await fs.copy(
          path.join(BACKUP_DIR, path.relative(IMG_DIR, imagePath)),
          imagePath,
          { overwrite: true }
        );
        skipped++;
      }
    } catch (error) {
      console.error(
        `  ✗ Erreur sur ${path.basename(imagePath)}:`,
        error.message
      );
    }
  }

  console.log(`\n✅ Terminé: ${optimized} optimisées, ${skipped} conservées`);
}

optimizeImages().catch(console.error);

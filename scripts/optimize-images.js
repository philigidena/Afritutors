import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const PUBLIC_DIR = './public';
const OPTIMIZED_DIR = './public/optimized';

// Target max width for images (responsive breakpoint)
const MAX_WIDTH = 1200;
// Quality for JPEG/WebP
const QUALITY = 80;

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n');

    // Create optimized directory if it doesn't exist
    if (!existsSync(OPTIMIZED_DIR)) {
        await mkdir(OPTIMIZED_DIR, { recursive: true });
    }

    const files = await readdir(PUBLIC_DIR);
    const imageFiles = files.filter(f => 
        /\.(jpg|jpeg|png)$/i.test(f) && 
        !f.includes('logo') // Keep logo as-is
    );

    let totalOriginal = 0;
    let totalOptimized = 0;

    for (const file of imageFiles) {
        const inputPath = join(PUBLIC_DIR, file);
        const stats = await stat(inputPath);
        const originalSize = stats.size;
        totalOriginal += originalSize;

        const ext = extname(file).toLowerCase();
        const name = basename(file, ext);
        
        // Output as WebP for best compression
        const outputPath = join(OPTIMIZED_DIR, `${name}.webp`);
        // Also keep a fallback JPG
        const fallbackPath = join(OPTIMIZED_DIR, `${name}.jpg`);

        try {
            const image = sharp(inputPath);
            const metadata = await image.metadata();

            // Resize if wider than MAX_WIDTH
            const resizeOptions = metadata.width > MAX_WIDTH 
                ? { width: MAX_WIDTH, withoutEnlargement: true }
                : {};

            // Create WebP version
            await sharp(inputPath)
                .resize(resizeOptions)
                .webp({ quality: QUALITY })
                .toFile(outputPath);

            // Create JPG fallback
            await sharp(inputPath)
                .resize(resizeOptions)
                .jpeg({ quality: QUALITY, mozjpeg: true })
                .toFile(fallbackPath);

            const webpStats = await stat(outputPath);
            const optimizedSize = webpStats.size;
            totalOptimized += optimizedSize;

            const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
            console.log(`✅ ${file}`);
            console.log(`   ${(originalSize / 1024).toFixed(0)} KB → ${(optimizedSize / 1024).toFixed(0)} KB (${reduction}% smaller)\n`);

        } catch (error) {
            console.error(`❌ Error processing ${file}:`, error.message);
        }
    }

    console.log('━'.repeat(50));
    console.log(`📊 TOTAL: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}% reduction)`);
    console.log('\n✨ Optimization complete! Images saved to /public/optimized/');
    console.log('   Now update your code to use the optimized images.');
}

optimizeImages().catch(console.error);


export async function sampleImage(imageSrc) {
  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const maxWidth = 700;
      const scale = maxWidth / img.width;

      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const pixels = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;

      const points = [];

      for (let y = 0; y < canvas.height; y += 3) {
        for (let x = 0; x < canvas.width; x += 3) {
          const index = (y * canvas.width + x) * 4;

          const alpha = pixels[index + 3];

          if (alpha > 80) {
            points.push({
              x,
              y,
            });
          }
        }
      }

      resolve({
        points,
        width: canvas.width,
        height: canvas.height,
      });
    };

    img.src = imageSrc;
  });
}
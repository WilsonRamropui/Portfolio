import { ImageResponse } from 'next/og';

import fs from 'fs';
import path from 'path';

// Image metadata
export const size = {
  width: 256,
  height: 256,
};
export const contentType = 'image/png';

export default async function Icon() {
  // Use fs.readFileSync to load the font in Node.js runtime
  const fontData = fs.readFileSync(
    path.join(process.cwd(), 'public', 'MagnificChaosPersonalUseRegular-x3J88.ttf')
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          color: '#E8DDD0',
          fontSize: 200,
          fontFamily: 'Magnific',
          // Use margin-top to optically center the complex gothic glyph
          marginTop: 20, 
        }}
      >
        W
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Magnific',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}

import { ImageResponse } from 'next/og';

// Must use the edge runtime for next/og fetch and import.meta.url
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 256,
  height: 256,
};
export const contentType = 'image/png';

export default async function Icon() {
  // Use fetch and import.meta.url to load the font correctly in Edge runtime
  const fontData = await fetch(
    new URL('../public/MagnificChaosPersonalUseRegular-x3J88.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

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

import { ImgHTMLAttributes } from "react";

import { Imagem, ImagemSemBorda } from "./style";

interface IMAGEMPROPS extends ImgHTMLAttributes<HTMLImageElement> {
  // src: string;
  hasBorder?: boolean | undefined;
}

export function Avatar({ hasBorder = true, ...props }: IMAGEMPROPS) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{hasBorder ? <Imagem {...props} /> : <ImagemSemBorda {...props} />}</>
  );
}

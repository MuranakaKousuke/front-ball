import { TextColor, LankColor } from "../utils/color";

// --------------- 基本ステータスランク生成 --------------- //
export const lankCreator = (status: number): string => {
  switch (true) {
    case status >= 90:
      return 'S';
    case status >= 80 && status < 90:
      return 'A';
    case status >= 70 && status < 80:
      return 'B';
    case status >= 60 && status < 70:
      return 'C';
    case status >= 50 && status < 60:
      return 'D';
    case status >= 40 && status < 50:
      return 'E';
    case status >= 20 && status < 40:
      return 'F';
    case status >= 1 && status < 20:
      return 'G';
    default:
      return '?'
  }
}

// --------------- 基本ステータスランクカラー生成 --------------- //
export const lankColorCreator = (status: number): string => {
  switch (true) {
    case status >= 90 && status <= 100:
      return LankColor.S;
    case status >= 80 && status < 90:
      return LankColor.A;
    case status >= 70 && status < 80:
      return LankColor.B;
    case status >= 60 && status < 70:
      return LankColor.C;
    case status >= 50 && status < 60:
      return LankColor.D;
    case status >= 40 && status < 50:
      return LankColor.E;
    case status >= 20 && status < 40:
      return LankColor.F;
    case status >= 1 && status < 20:
      return LankColor.G;
    default:
      return TextColor.BLACK;
  }
}

// --------------- カラーオブジェクト定義 --------------- //
type ColorObject = {
  backGroundColor: string;
  fontWeight: string;
  color: string;
}
// --------------- 特殊能力ラベルカラー生成 --------------- //
export const specialLabelColorCreator = (status: number): ColorObject => {
  switch (true) {
    case status >= 70:
      return {
        backGroundColor: '#afffff',
        fontWeight: 'bold',
        color: TextColor.DEFAULT,
      };
    case status < 70 && status >= 40:
      return {
        backGroundColor: '#e8ffff',
        fontWeight: 'bold',
        color: TextColor.DEFAULT,
      };
    case status < 40:
      return {
        backGroundColor: '#ffeedc',
        fontWeight: 'bold',
        color: TextColor.RED,
      };
    default:
      return {
        backGroundColor: TextColor.RED,
        fontWeight: 'normal',
        color: TextColor.RED,
      };
  }
}

// --------------- 特殊能力ランクカラー生成 --------------- //
export const specialLankColorCreator = (status: number): ColorObject => {
  switch (true) {
    case status >= 70:
      return {
        backGroundColor: '#3380a2',
        fontWeight: 'bold',
        color: TextColor.WHITE,
      };
    case status < 70 && status >= 40:
      return {
        backGroundColor: '#add8ea',
        fontWeight: 'bold',
        color: TextColor.WHITE,
      };
    case status < 40:
      return {
        backGroundColor: '#f2d8e0',
        fontWeight: 'bold',
        color: TextColor.RED,
      };
    default:
      return {
        backGroundColor: TextColor.RED,
        fontWeight: 'normal',
        color: TextColor.RED,
      };
  }
}
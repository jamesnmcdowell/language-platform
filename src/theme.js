import { grommet, generate } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import { FormNext } from "grommet-icons";
import { rgba } from 'polished';

const brandColor = '#7e57c2';
const accentColors = ['#26c6da', '#FD6FFF', '#81FCED', '#FFCA58'];
const neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D'];
const statusColors = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
};
const darkColors = [
  '#333333',
  '#555555',
  '#777777',
  '#999999',
  '#999999',
  '#999999',
];
const lightColors = [
  '#F8F8F8',
  '#F2F2F2',
  '#EDEDED',
  '#DADADA',
  '#DADADA',
  '#DADADA',
];
const focusColor = accentColors[0];

const colors = {
  active: rgba(221, 221, 221, 0.5),
  black: '#000000',
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: rgba(0, 0, 0, 0.33),
  },
  brand: brandColor,
  control: {
    dark: 'accent-1',
    light: 'brand',
  },
  focus: focusColor,
  placeholder: '#AAAAAA',
  selected: 'brand',
  text: {
    dark: '#f8f8f8',
    light: '#444444',
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666',
  },
  white: '#FFFFFF',
};

export default deepMerge(grommet, generate(18), {
  global: {
    input: {
      weight: 400
    },
    colors,
    font: {
      family: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    }
  },
  paragraph: {
    medium: {
      maxWidth: "600px"
    },
    large: {
      maxWidth: "600px"
    }
  },
  image: {
    extend: () => `width:100%;`
  },
  icon: {
    size: {
      small: '12px',
      medium: '18px',
      large: '48px',
      xlarge: '96px',
    },
    extend: () => `padding:0;`
  },
 
  filterSelect: {
    icons: {
      filter: undefined,
      next: undefined
    }
  },
  select: {
    icons: {
      color: "dark-3"
    },
    options: {
      box: {
        pad: "medium"
      }
    }
  }
});
// export default deepMerge(grommet, 
//   {
//     "global": {
//       "colors": {
//         "icon": {
//           "0": "#",
//           "1": "6",
//           "2": "6",
//           "3": "6",
//           "4": "6",
//           "5": "6",
//           "6": "6",
//           "dark": "#f8f8f8",
//           "light": "#666666"
//         },
//         "active": {
//           "0": "r",
//           "1": "g",
//           "2": "b",
//           "3": "a",
//           "4": "(",
//           "5": "2",
//           "6": "2",
//           "7": "1",
//           "8": ",",
//           "9": "2",
//           "10": "2",
//           "11": "1",
//           "12": ",",
//           "13": "2",
//           "14": "2",
//           "15": "1",
//           "16": ",",
//           "17": "0",
//           "18": ".",
//           "19": "5",
//           "20": ")",
//           "light": "#009688",
//           "dark": "#ff4081"
//         }, 
//         "black": "#000000",
//         "border": {
//           "dark": "rgba(255,255,255,0.33)",
//           "light": "rgba(0,0,0,0.33)"
//         },
//         "brand": "#673AB7",
//         "control": {
//           "dark": "#ffffff",
//           "light": "#00ABD4"
//         },
//         "focus": "#2AD2C9",
//         "placeholder": "#AAAAAA",
//         "selected": "brand",
//         "text": {
//           "dark": "#f8f8f8",
//           "light": "#444444"
//         },
//         "white": "#FFFFFF",
//         "accent-1": "#2AD2C9",
//         "accent-2": "#FFC107",
//         "accent-3": "#9C27B0",
//         "accent-4": "#673AB7",
//         "dark-1": "#333333",
//         "dark-2": "#555555",
//         "dark-3": "#777777",
//         "dark-4": "#999999",
//         "dark-5": "#999999",
//         "dark-6": "#999999",
//         "light-1": "#F8F8F8",
//         "light-2": "#F2F2F2",
//         "light-3": "#EDEDED",
//         "light-4": "#DADADA",
//         "light-5": "#DADADA",
//         "light-6": "#DADADA",
//         "neutral-1": "#795548",
//         "neutral-2": "#009688",
//         "neutral-3": "#8BC34A",
//         "neutral-4": "#CDDC39",
//         "status-critical": "#FF4081",
//         "status-error": "#F44336",
//         "status-warning": "#FFEB3B",
//         "status-ok": "#4CAF50",
//         "status-unknown": "#9E9E9E",
//         "status-disabled": "#9E9E9E",
//         "neutral-5": "#FF9800"
//       },
//       "animation": {
//         "duration": "1s",
//         "jiggle": {
//           "duration": "0.1s"
//         }
//       },
//       "borderSize": {
//         "xsmall": "1px",
//         "small": "2px",
//         "medium": "4px",
//         "large": "12px",
//         "xlarge": "24px"
//       },
//       "breakpoints": {
//         "small": {
//           "value": 768,
//           "borderSize": {
//             "xsmall": "1px",
//             "small": "2px",
//             "medium": "4px",
//             "large": "6px",
//             "xlarge": "12px"
//           },
//           "edgeSize": {
//             "none": "0px",
//             "hair": "1px",
//             "xxsmall": "2px",
//             "xsmall": "3px",
//             "small": "6px",
//             "medium": "12px",
//             "large": "24px",
//             "xlarge": "48px"
//           },
//           "size": {
//             "xxsmall": "24px",
//             "xsmall": "48px",
//             "small": "96px",
//             "medium": "192px",
//             "large": "384px",
//             "xlarge": "768px",
//             "full": "100%"
//           }
//         },
//         "medium": {
//           "value": 1536
//         },
//         "large": {}
//       },
//       "deviceBreakpoints": {
//         "phone": "small",
//         "tablet": "medium",
//         "computer": "large"
//       },
//       "control": {
//         "border": {
//           "width": "1px",
//           "radius": "0px",
//           "color": "border"
//         }
//       },
//       "debounceDelay": 300,
//       "drop": {
//         "background": "#f8f8f8",
//         "border": {
//           "width": "0px",
//           "radius": "0px"
//         },
//         "shadowSize": "small",
//         "zIndex": "20"
//       },
//       "edgeSize": {
//         "none": "0px",
//         "hair": "1px",
//         "xxsmall": "3px",
//         "xsmall": "6px",
//         "small": "12px",
//         "medium": "24px",
//         "large": "48px",
//         "xlarge": "96px",
//         "responsiveBreakpoint": "small"
//       },
//       "elevation": {
//         "light": {
//           "none": "none",
//           "xsmall": "0px 1px 2px rgba(0, 0, 0, 0.20)",
//           "small": "0px 2px 4px rgba(0, 0, 0, 0.20)",
//           "medium": "0px 4px 8px rgba(0, 0, 0, 0.20)",
//           "large": "0px 8px 16px rgba(0, 0, 0, 0.20)",
//           "xlarge": "0px 12px 24px rgba(0, 0, 0, 0.20)"
//         },
//         "dark": {
//           "none": "none",
//           "xsmall": "0px 2px 2px rgba(255, 255, 255, 0.40)",
//           "small": "0px 4px 4px rgba(255, 255, 255, 0.40)",
//           "medium": "0px 6px 8px rgba(255, 255, 255, 0.40)",
//           "large": "0px 8px 16px rgba(255, 255, 255, 0.40)",
//           "xlarge": "0px 12px 24px rgba(255, 255, 255, 0.40)"
//         }
//       },
//       "focus": {
//         "border": {
//           "color": "#009688"
//         }
//       },
//       "font": {
//         "size": "18px",
//         "height": "24px",
//         "maxWidth": "432px",
//         "family": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
//       },
//       "hover": {
//         "background": {
//           "dark": "#ff4081",
//           "light": "#009688"
//         },
//         "color": {
//           "dark": "white",
//           "light": "black"
//         },
//         "text": {
//           "light": "#000000",
//           "dark": "#f8f8f8"
//         }
//       },
//       "input": {
//         "padding": "12px",
//         "weight": 600
//       },
//       "opacity": {
//         "strong": 0.8,
//         "medium": 0.4,
//         "weak": 0.1
//       },
//       "selected": {
//         "background": "selected",
//         "color": "white"
//       },
//       "spacing": "24px",
//       "size": {
//         "xxsmall": "48px",
//         "xsmall": "96px",
//         "small": "192px",
//         "medium": "384px",
//         "large": "768px",
//         "xlarge": "1152px",
//         "xxlarge": "1536px",
//         "full": "100%"
//       }
//     },
//     "icon": {
//       "size": {
//         "small": "12px",
//         "medium": "24px",
//         "large": "48px",
//         "xlarge": "96px"
//       }
//     },
//     "accordion": {
//       "icons": {}
//     },
//     "anchor": {
//       "textDecoration": "none",
//       "fontWeight": 600,
//       "color": {
//         "dark": "#7986cb",
//         "light": "#3f51b5"
//       },
//       "hover": {
//         "textDecoration": "underline"
//       }
//     },
//     "box": {
//       "responsiveBreakpoint": "small"
//     },
//     "button": {
//       "border": {
//         "width": "2px",
//         "radius": "0px"
//       },
//       "primary": {
//         "color": {
//           "light": "#3f51b5",
//           "dark": "#7986cb"
//         }
//       },
//       "disabled": {
//         "opacity": 0.3
//       },
//       "minWidth": "96px",
//       "maxWidth": "384px",
//       "padding": {
//         "vertical": "4px",
//         "horizontal": "22px"
//       }
//     },
//     "calendar": {
//       "small": {
//         "fontSize": "14px",
//         "lineHeight": 1.375,
//         "daySize": "27.428571428571427px",
//         "slideDuration": "0.2s"
//       },
//       "medium": {
//         "fontSize": "18px",
//         "lineHeight": 1.45,
//         "daySize": "54.857142857142854px",
//         "slideDuration": "0.5s"
//       },
//       "large": {
//         "fontSize": "30px",
//         "lineHeight": 1.11,
//         "daySize": "109.71428571428571px",
//         "slideDuration": "0.8s"
//       },
//       "icons": {
//         "small": {}
//       }
//     },
//     "carousel": {
//       "icons": {}
//     },
//     "chart": {},
//     "checkBox": {
//       "border": {
//         "color": {
//           "dark": "rgba(255, 255, 255, 0.5)",
//           "light": "rgba(0, 0, 0, 0.15)"
//         },
//         "width": "2px"
//       },
//       "check": {
//         "radius": "0px",
//         "thickness": "4px"
//       },
//       "icon": {},
//       "icons": {},
//       "hover": {
//         "border": {
//           "color": {
//             "dark": "white",
//             "light": "black"
//           }
//         }
//       },
//       "size": "24px",
//       "toggle": {
//         "color": {
//           "dark": "#bdbdbd",
//           "light": "#00ABD4"
//         },
//         "radius": "24px",
//         "size": "48px",
//         "knob": {}
//       },
//       "color": {
//         "light": "#00ABD4",
//         "dark": "#a7ecff"
//       }
//     },
//     "clock": {
//       "analog": {
//         "hour": {
//           "color": {
//             "dark": "light-2",
//             "light": "dark-3"
//           },
//           "width": "8px",
//           "size": "24px",
//           "shape": "round"
//         },
//         "minute": {
//           "color": {
//             "dark": "light-4",
//             "light": "dark-3"
//           },
//           "width": "4px",
//           "size": "12px",
//           "shape": "round"
//         },
//         "second": {
//           "color": {
//             "dark": "accent-1",
//             "light": "accent-1"
//           },
//           "width": "3px",
//           "size": "9px",
//           "shape": "round"
//         },
//         "size": {
//           "small": "72px",
//           "medium": "96px",
//           "large": "144px",
//           "xlarge": "216px",
//           "huge": "288px"
//         }
//       },
//       "digital": {
//         "text": {
//           "xsmall": {
//             "size": "10px",
//             "height": 1.5
//           },
//           "small": {
//             "size": "14px",
//             "height": 1.43
//           },
//           "medium": {
//             "size": "18px",
//             "height": 1.375
//           },
//           "large": {
//             "size": "22px",
//             "height": 1.167
//           },
//           "xlarge": {
//             "size": "26px",
//             "height": 1.1875
//           },
//           "xxlarge": {
//             "size": "34px",
//             "height": 1.125
//           }
//         }
//       }
//     },
//     "collapsible": {
//       "minSpeed": 200,
//       "baseline": 500
//     },
//     "dataTable": {
//       "header": {},
//       "groupHeader": {
//         "border": {
//           "side": "bottom",
//           "size": "xsmall"
//         },
//         "fill": "vertical",
//         "pad": {
//           "horizontal": "small",
//           "vertical": "xsmall"
//         },
//         "background": {
//           "dark": "dark-2",
//           "light": "light-2"
//         }
//       },
//       "icons": {},
//       "resize": {
//         "border": {
//           "side": "right",
//           "color": "border"
//         }
//       },
//       "primary": {
//         "weight": "bold"
//       }
//     },
//     "diagram": {
//       "line": {
//         "color": "accent-1"
//       }
//     },
//     "formField": {
//       "border": {
//         "color": "border",
//         "position": "inner",
//         "side": "bottom",
//         "error": {
//           "color": {
//             "dark": "white",
//             "light": "status-critical"
//           }
//         }
//       },
//       "content": {
//         "pad": {
//           "horizontal": "small",
//           "bottom": "small"
//         }
//       },
//       "error": {
//         "margin": {
//           "vertical": "xsmall",
//           "horizontal": "small"
//         },
//         "color": {
//           "dark": "status-critical",
//           "light": "status-critical"
//         }
//       },
//       "help": {
//         "margin": {
//           "left": "small"
//         },
//         "color": {
//           "dark": "dark-3",
//           "light": "dark-3"
//         }
//       },
//       "label": {
//         "margin": {
//           "vertical": "xsmall",
//           "horizontal": "small"
//         }
//       },
//       "margin": {
//         "bottom": "small"
//       }
//     },
//     "grommet": {},
//     "heading": {
//       "font": {},
//       "level": {
//         "1": {
//           "font": {},
//           "small": {
//             "size": "34px",
//             "height": "40px",
//             "maxWidth": "816px"
//           },
//           "medium": {
//             "size": "50px",
//             "height": "56px",
//             "maxWidth": "1200px"
//           },
//           "large": {
//             "size": "82px",
//             "height": "88px",
//             "maxWidth": "1968px"
//           },
//           "xlarge": {
//             "size": "114px",
//             "height": "120px",
//             "maxWidth": "2736px"
//           }
//         },
//         "2": {
//           "font": {},
//           "small": {
//             "size": "26px",
//             "height": "32px",
//             "maxWidth": "624px"
//           },
//           "medium": {
//             "size": "34px",
//             "height": "40px",
//             "maxWidth": "816px"
//           },
//           "large": {
//             "size": "50px",
//             "height": "56px",
//             "maxWidth": "1200px"
//           },
//           "xlarge": {
//             "size": "66px",
//             "height": "72px",
//             "maxWidth": "1584px"
//           }
//         },
//         "3": {
//           "font": {},
//           "small": {
//             "size": "22px",
//             "height": "28px",
//             "maxWidth": "528px"
//           },
//           "medium": {
//             "size": "26px",
//             "height": "32px",
//             "maxWidth": "624px"
//           },
//           "large": {
//             "size": "34px",
//             "height": "40px",
//             "maxWidth": "816px"
//           },
//           "xlarge": {
//             "size": "42px",
//             "height": "48px",
//             "maxWidth": "1008px"
//           }
//         },
//         "4": {
//           "font": {},
//           "small": {
//             "size": "18px",
//             "height": "24px",
//             "maxWidth": "432px"
//           },
//           "medium": {
//             "size": "18px",
//             "height": "24px",
//             "maxWidth": "432px"
//           },
//           "large": {
//             "size": "18px",
//             "height": "24px",
//             "maxWidth": "432px"
//           },
//           "xlarge": {
//             "size": "18px",
//             "height": "24px",
//             "maxWidth": "432px"
//           }
//         },
//         "5": {
//           "font": {},
//           "small": {
//             "size": "16px",
//             "height": "22px",
//             "maxWidth": "384px"
//           },
//           "medium": {
//             "size": "16px",
//             "height": "22px",
//             "maxWidth": "384px"
//           },
//           "large": {
//             "size": "16px",
//             "height": "22px",
//             "maxWidth": "384px"
//           },
//           "xlarge": {
//             "size": "16px",
//             "height": "22px",
//             "maxWidth": "384px"
//           }
//         },
//         "6": {
//           "font": {},
//           "small": {
//             "size": "14px",
//             "height": "20px",
//             "maxWidth": "336px"
//           },
//           "medium": {
//             "size": "14px",
//             "height": "20px",
//             "maxWidth": "336px"
//           },
//           "large": {
//             "size": "14px",
//             "height": "20px",
//             "maxWidth": "336px"
//           },
//           "xlarge": {
//             "size": "14px",
//             "height": "20px",
//             "maxWidth": "336px"
//           }
//         }
//       },
//       "responsiveBreakpoint": "small",
//       "weight": 600
//     },
//     "layer": {
//       "background": "white",
//       "border": {
//         "radius": "4px"
//       },
//       "container": {
//         "zIndex": "15"
//       },
//       "overlay": {
//         "background": "rgba(0, 0, 0, 0.5)"
//       },
//       "responsiveBreakpoint": "small",
//       "zIndex": "10"
//     },
//     "menu": {
//       "icons": {}
//     },
//     "meter": {
//       "color": "accent-1"
//     },
//     "paragraph": {
//       "small": {
//         "size": "14px",
//         "height": "20px",
//         "maxWidth": "336px"
//       },
//       "medium": {
//         "size": "18px",
//         "height": "24px",
//         "maxWidth": "432px"
//       },
//       "large": {
//         "size": "22px",
//         "height": "28px",
//         "maxWidth": "528px"
//       },
//       "xlarge": {
//         "size": "26px",
//         "height": "32px",
//         "maxWidth": "624px"
//       },
//       "xxlarge": {
//         "size": "34px",
//         "height": "40px",
//         "maxWidth": "816px"
//       }
//     },
//     "radioButton": {
//       "border": {
//         "color": {
//           "dark": "rgba(255, 255, 255, 0.5)",
//           "light": "rgba(0, 98, 186, 0.5)"
//         },
//         "width": "2px"
//       },
//       "check": {
//         "radius": "100%"
//       },
//       "hover": {
//         "border": {
//           "color": {
//             "dark": "white",
//             "light": "black"
//           }
//         }
//       },
//       "icon": {},
//       "icons": {},
//       "gap": "small",
//       "size": "24px"
//     },
//     "rangeInput": {
//       "track": {
//         "height": "4px",
//         "color": [
//           null,
//           ";"
//         ]
//       },
//       "thumb": {}
//     },
//     "rangeSelector": {
//       "background": {
//         "invert": {
//           "color": "light-4"
//         }
//       }
//     },
//     "select": {
//       "container": {},
//       "control": {},
//       "icons": {},
//       "options": {
//         "box": {
//           "align": "start",
//           "pad": "small"
//         },
//         "text": {
//           "margin": "none"
//         }
//       },
//       "step": 20
//     },
//     "tab": {
//       "active": {
//         "color": "text"
//       },
//       "border": {
//         "side": "bottom",
//         "size": "small",
//         "color": {
//           "dark": "accent-1",
//           "light": "brand"
//         },
//         "active": {
//           "color": {
//             "dark": "white",
//             "light": "black"
//           }
//         },
//         "hover": {
//           "color": {
//             "dark": "white",
//             "light": "black"
//           }
//         }
//       },
//       "color": "control",
//       "hover": {
//         "color": {
//           "dark": "white",
//           "light": "black"
//         }
//       },
//       "margin": {
//         "vertical": "xxsmall",
//         "horizontal": "small"
//       },
//       "pad": {
//         "bottom": "xsmall"
//       }
//     },
//     "tabs": {
//       "header": {},
//       "panel": {}
//     },
//     "table": {
//       "header": {
//         "align": "start",
//         "pad": {
//           "horizontal": "small",
//           "vertical": "xsmall"
//         },
//         "border": "bottom",
//         "verticalAlign": "bottom",
//         "fill": "vertical"
//       },
//       "body": {
//         "align": "start",
//         "pad": {
//           "horizontal": "small",
//           "vertical": "xsmall"
//         }
//       },
//       "footer": {
//         "align": "start",
//         "pad": {
//           "horizontal": "small",
//           "vertical": "xsmall"
//         },
//         "border": "top",
//         "verticalAlign": "top",
//         "fill": "vertical"
//       }
//     },
//     "text": {
//       "xsmall": {
//         "size": "12px",
//         "height": "18px",
//         "maxWidth": "288px"
//       },
//       "small": {
//         "size": "14px",
//         "height": "20px",
//         "maxWidth": "336px"
//       },
//       "medium": {
//         "size": "18px",
//         "height": "24px",
//         "maxWidth": "432px"
//       },
//       "large": {
//         "size": "22px",
//         "height": "28px",
//         "maxWidth": "528px"
//       },
//       "xlarge": {
//         "size": "26px",
//         "height": "32px",
//         "maxWidth": "624px"
//       },
//       "xxlarge": {
//         "size": "34px",
//         "height": "40px",
//         "maxWidth": "816px"
//       }
//     },
//     "video": {
//       "captions": {
//         "background": "rgba(0, 0, 0, 0.7)"
//       },
//       "icons": {},
//       "scrubber": {
//         "color": "light-4"
//       }
//     },
//     "worldMap": {
//       "color": "light-3",
//       "continent": {
//         "active": "8px",
//         "base": "6px"
//       },
//       "hover": {
//         "color": "light-4"
//       },
//       "place": {
//         "active": "20px",
//         "base": "8px"
//       }
//     }
//   }
// );





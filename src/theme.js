import { grommet, generate } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import { FormNext } from "grommet-icons";


export default deepMerge(grommet, generate(18), {
  global: {
    input: {
      weight: 400
    }
  },
  paragraph: {
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

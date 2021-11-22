module.exports = {
  mode:"jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing:{
      widest:".2em"
    },
    extend: {
      height:{
        "90%":"90vh"
      },
      fontFamily:{
        "Barlow":["Barlow"],
        "Fraunces":["Fraunces"]
      },
      fontSize:{
        "default":"1.125rem"
      },
      colors:{
        //primary-colors
        "primary-soft-red":"hsl(7, 99%, 70%)",
        "primary-yellow":"hsl(51,100%, 49%)",
        "primary-graphic-design":"hsl(167, 40%, 24%)",
        "primary-photography-text":"hsl(198, 62%, 26%)",
        "primary-footer":"hsl(168, 34%, 41%)",

        //Neutral
        "neutral-desaturated-blue":"hsl(212, 27%, 19%)",
        "neutral-vd-grayish-blue":"hsl(213, 9%, 39%)",
        "neutral-d-grayish-blue":"hsl(232, 10%, 55%)",
        "neutral-grayish-blue":"hsl(210, 4%, 67%)",
        "neutral-white":"hsl(0,0%,100%)"
      },
      backgroundImage:{
        "image-header":"url(/images/desktop/image-header.jpg)",
        "m-image-header":"url(/images/mobile/image-header.jpg)",
        "image-gallery-#3":"url(/images/desktop/image-graphic-design.jpg)",
        "m-image-gallery-#3":"url(/images/mobile/image-graphic-design.jpg)",
        "image-gallery-#4":"url(/images/desktop/image-photography.jpg)",
        "m-image-gallery-#4":"url(/images/mobile/image-photography.jpg)"
      },
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

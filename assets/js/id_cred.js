const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
}

function verify () {

  let idurl = "/e-badge/download/";
  const bno = document.getElementById("badgeId").value;

  
  switch (bno) {

      // Angela Joel
      case "A017JP":
        window.open(idurl + bno + ".jpg", "_blank");
          break;
      
      // Basanio
      case "B02V3L":
        window.open(idurl + bno + ".jpg", "_blank");
          break;

      // Ricky Donald
      case "LUCIFER":
        window.open(idurl + bno + ".jpg", "_blank");
          break;

      // Jeniya Joel
      case "J03P8L":
        window.open(idurl + bno + ".jpg", "_blank");
          break;
  
      default:
          alert("Badge Number not Found!");
          bno = "";
          break;
  }
    
}
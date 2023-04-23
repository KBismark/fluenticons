!(function () {
  //This url must be specified when importing into other modules
  Breaker.pathname =
    "https://cdn.jsdelivr.net/gh/KBismark/fluenticons/solid/Megaphone.min.js";

  //Import the base method of fluent icons
  Breaker.include("FluentSolids"); //"FluentSolids" can be used interchangeably with the module's url

  //After dependencies are loaded, executes module
  Breaker.onload = function () {
    //Now, require FluentSolids
    const { FluentSolids } = require("FluentSolids");

    function MegaphoneSolid({ size, color }) {
      const d =
        "M21.9068 5.62236C21.9686 5.83039 22 6.04627 22 6.26329V17.7387C22 18.9813 20.9926 19.9887 19.75 19.9887C19.5329 19.9887 19.317 19.9573 19.1089 19.8954L13.595 18.2558C12.9378 19.6008 11.5584 20.4994 10 20.4994C7.8578 20.4994 6.10892 18.8155 6.0049 16.6991L6 16.4994L5.999 15.9987L3.60891 15.288C2.65446 15.0043 2 14.127 2 13.1313V10.8693C2 9.87356 2.65455 8.99622 3.60908 8.71256L19.1091 4.1065C20.3002 3.75253 21.5528 4.4312 21.9068 5.62236ZM7.499 16.4447L7.5 16.4994C7.5 17.8801 8.61929 18.9994 10 18.9994C10.8852 18.9994 11.6783 18.5352 12.1238 17.82L7.499 16.4447Z";
      return FluentSolids({
        size,
        iconProps: { style: { fill: "none" } },
        pathProps: { d, style: { fill: color } },
      });
    }

    //Export icon
    Breaker.expot = { MegaphoneSolid };
  };
})();

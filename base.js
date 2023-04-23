!(function () {
  //This url must be specified when importing into other modules
  Breaker.pathname =
    "https://cdn.jsdelivr.net/gh/KBismark/fluenticons/base.min.js";

  const { createComponent } = Breaker.ui;

  //All Icons makes use of this function
  function FluentSolids({ size, iconProps, pathProps }) {
    iconProps.style = {
      ...(iconProps.style || {}),
      width: (size = size + "px"),
      height: size,
    };

    this.elements = {
      icon: iconProps,
      path: pathProps,
    };
    return (
      <jshon>
        <svg
          key="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path key="path" fill="#302e2d" />
        </svg>
      </jshon>
    );
  }
  FluentSolids = createComponent(FluentSolids);

  //Export base function
  Breaker.expot = { FluentSolids };

  //Allow the require method to be set on the window object
  //This will allow importing with the require method
  //Importing via `require()` only requires `FluentSolids` as argument rather
  //than providing the url every time you need to import
  Breaker.useRequire({
    FluentSolids:
      "https://cdn.jsdelivr.net/gh/KBismark/fluenticons/base.min.js",
  });
})();

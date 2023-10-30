export default function Progress(props: any) {
  return (
    <div className="w-full flex items-center justify-center">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.class}
      >
        <rect width="100" height="100" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1201_2" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_1201_2"
            width="100"
            height="100"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFcHBwjIyM2dnZ9fX1qamp4uLisrKy7Ozsg4ODoKCgvLy8lpaWeXl5z8/PxcXFZmZm////D7R/dgAAABF0Uk5T/////////////////////wAlrZliAAACSklEQVR42uya23KEIAyGIRwVNX3/p227W3dbBUKQybTT/a91PoGQo+pNQOoFeUH+DySA91Z/ynoPYTxktRqP0nYdBzFbwpLSZkZA3KSwJjW5qxDQSEvDFYhrQdwwrhdiLLbLmi4ILMjRAh0Qi1xZLsRE5CsaFsQp7JFyDEgno0TJQtZexgcFGiGun5FfixrMyFLOEHON8UExNCTiVUUSYvG6LAEBHCGoQswyBLKYGsTiGNkKJOAohTJED4PoIgRwnKAE0QMhugAJOFIhD5mGQqYspMVpRbsBwGYjy4V9g2zka/65BcGTn7TlIImX9JAJU8pB2CEPiMVkIMAP3kR4gzPEd6QhdYo/Q6o3cS9EzJwixjTvx7M23UfVdCS7zT9MSvmWu3WCBNrkf2SVX9li9XKFIwTo6BBzkXxqOPkHZK487LKWcd8xV3lvPkIqxrUU9vO+GwttXi2QqbDUmdovz67jdT36jWkWnM1IjYfUnNPfWsmIM/FUYChZVxpjwqp6TxQDMpPuwWadDXBuPJBO+FB1f3lIlu8KdA6V88INr7XGE33KHfasQrPiSf3xfXfDrYGnbWg4yVxk9JzaqSn58OxsJUcBdrZC5F2PHXtqRnbeRWaQh+4c2dVLXbkwpmeLdk3k01tvVo+ffWdvW6qlfFYvUp/IVFoiNaNM9StSx8t0JER6KzJdIpF+l0znTqYHKdNNFekLy3S4ZXr1MlMHmfmJzCRIZqYlNJ2TmTPKTEyFZr9CU2yhebzQnwVi/0i8/lt5QX4p5F2AAQCgrE2BUDooiAAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    </div>
  )
}

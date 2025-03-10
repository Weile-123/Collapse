# weile-collapse 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)

> react+ts collapse component

## Install

```sh
npm i weile-collapse
```

## Usage

```js
import Collapse from "weile-collapse";

const App = () => {
  const data = [
    {
      title: "title1",
      content: "content1",
    },
    {
      title: "title2",
      content: "content2",
    },
    {
      title: "title3",
      content: "content3",
    },
    {
      title: "title4",
      content: "content4",
    },
  ];
  return (
    <div className="container" style={{ width: "90%", margin: "0 auto" }}>
      <Collapse
        data={data}
        bgColor="#101010"
        contentColor="#e0e0e0"
        titleColor="#fff"
        img=""
        speed={0.4}
        checked={0}
        titleFontSize={30}
        contentFontSize={20}
      />
    </div>
  );
};
```

## Author

👤 **weile-huang**

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

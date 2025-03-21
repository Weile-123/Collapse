# weile-collapse 👋

![Version](https://img.shields.io/badge/version-1.0.10-blue.svg?cacheSeconds=2592000)
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
        onChange={(checkIndex) => {
          console.log(checkIndex);
        }}
      />
    </div>
  );
};
```

## API

### Collapse props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 50px;">Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>data</td>
          <td>DataItem[]</td>
          <th>-</th>
          <td>
            interface DataItem {
                title: string;
                content: string;
            };
          </td>
      </tr>
      <tr>
          <td>bgColor</td>
          <td>String<String></td>
          <th>#f7f7f7</th>
          <td>Background color</td>
      </tr>
      <tr>
          <td>titleColor</td>
          <td>String</td>
          <th>#000000</th>
          <td>Title color</td>
      </tr>
      <tr>
          <td>contentColor</td>
          <td>String</td>
          <th>#404040</th>
          <td>contentColor</td>
      </tr>
      <tr>
          <td>titleFontSize</td>
          <td>Number</td>
          <th>30</th>
          <td>Title font-size(px)</td>
      </tr>
      <tr>
          <td>contentFontSize</td>
          <td>Number</td>
          <th>20</th>
          <td>Content font-size(px)</td>
      </tr>
      <tr>
          <td>img</td>
          <td>String</td>
          <th>-</th>
          <td>Right arrow icon</td>
      </tr>
      <tr>
          <td>speed</td>
          <td>Number</td>
          <th>0.4</th>
          <td>Fold animation speed (transform 0.4s)</td>
      </tr>
      <tr>
          <td>checked</td>
          <td>Number | Null</td>
          <th>Null</th>
          <td>Default expansion index value</td>
      </tr>
    </tbody>
</table>

For details on DataItem[] default data construction, see Usage.

### **Collapse Events**

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">Event</th>
        <th>Description</th>
        <th>Arguments</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>onChange</td>
          <td>Emitted when switching panel,return index value</td>
          <td>checkIndex: <span style="color:#07C160">Number</span></td>
      </tr>
    </tbody>
</table>

## Author

👤 **weile-huang**

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

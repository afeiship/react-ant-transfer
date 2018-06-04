# react-ant-transfer
> Ant transfer for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    template: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop,
    template: noop,
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-ant-transfer --registry=https://registry.npm.taobao.org
```

```js
import ReactAntTransfer from 'react-ant-transfer';
```

```scss
// customize your styles:
$react-ant-transfer-options:(
);

@import 'node_modules/react-ant-transfer/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-ant-transfer --save
// import : import ReactAntTransfer from 'react-ant-transfer'

class App extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  }

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  componentDidMount() {
    this.getMock();
  }

  renderItem = (item) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );

    return {
      label: customLabel, // for displayed item
      value: item.title, // for title and filter matching
    };
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  render() {
    const { mockData, targetKeys } = this.state;
    return (
      <div className="hello-react-ant-transfer">
        <ReactAntTransfer template={this.renderItem} targetKeys={targetKeys} items={mockData} ref='rc' />
      </div>
    );
  }
}

```

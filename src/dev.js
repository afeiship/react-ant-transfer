import './dev.scss';
import ReactAntTransfer from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

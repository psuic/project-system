
export default class IndexPage extends React.Component {

  render() {
    return (
      <BaseLayout>
        <button className="button is-white">White</button>
        <button className="button is-light">Light</button>
        <button className="button is-dark">Dark</button>
        <button className="button is-black">Black</button>
        <button className="button is-text">Text</button>
      </BaseLayout>
    );
  }
}

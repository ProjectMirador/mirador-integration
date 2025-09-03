// DummyPluginForMenu.js
const AnotherCustomMenuItem = () => {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>More!</p>
    </div>
  );
};

export default {
  target: 'WindowTopBarPluginMenu',
  mode: 'add',
  name: 'AnotherCustomMenuItem',
  component: AnotherCustomMenuItem,
};
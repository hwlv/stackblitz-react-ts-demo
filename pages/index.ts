const files = require.context('.', true, /\.tsx$/);

const pages = [];

files.keys().forEach((key) => {
  let i = key.replace(/(\.\/|\.tsx)/g, '');

  if (i !== 'index') {
    let comp = files(key).default;

    let path = i.indexOf('/index') !== -1 ? i.split('/index')[0] : i;

    pages.push({
      path,
      comp,
    });
  }
});

export default pages;

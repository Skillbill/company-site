const fs = require('fs');
const execSync = require('child_process').execSync; 

const DIST_DIR = 'dist';

const STATIC_DIR = 'static';

const DIST_DIR_PATH = `${__dirname}/${DIST_DIR}`;

console.log(`dist path: ${DIST_DIR_PATH}`);

// create dist dirs
if(!fs.existsSync(DIST_DIR_PATH)) {
  execSync(`mkdir -p ${DIST_DIR_PATH}/*`);
}

const build = () => {
  const layout = fs.readFileSync(`${__dirname}/layout.html`).toString();

  const pages = JSON.parse(fs.readFileSync(`${__dirname}/pages.json`).toString());

  // clean dist dir
  execSync(`rm -rf ${DIST_DIR_PATH}/*`);

  // generate pages
  pages.forEach((page) => {
    const content = fs.readFileSync(`${__dirname}/pages/${page.file}.html`).toString();
    let html = layout.replace('$content', content);
    Object.keys(page.data).forEach(key => {
      html = html.replace(`$${key}`, page.data[key] || '');
    });
    fs.writeFileSync(`${DIST_DIR_PATH}/${page.file}.html`, html);
  });

  // copy static files
  execSync(`cp -r ${__dirname}/${STATIC_DIR}/* ${DIST_DIR_PATH}`);
  execSync(`cp -r ${__dirname}/pages.json ${DIST_DIR_PATH}`);

  // copy partials html files
  execSync(`mkdir -p ${DIST_DIR_PATH}/partials`);
  execSync(`cp -r ${__dirname}/pages/* ${DIST_DIR_PATH}/partials`);

  console.log('>> site built ✔️\n');
};

build();

// rebuild on file changes if in watch mode
if(process.argv[2] === '--watch') {
  [__dirname, `${__dirname}/pages`, `${__dirname}/static`].forEach((dir) => {
    fs.watch(dir, (event, file) => {
      console.log(event, 'on', file, 'detected');
      build();
    });
  });
}

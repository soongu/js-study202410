/*
    <html>
      <head>
      <body>
        <section>
          <ul>
            <li>양파</li>
            <li>피망</li>
          </ul>
        </section>
      </body>
      </head>
    </html>
*/
const liTag1 = {
  tagName: 'li',
  children: [],
  parentElement: ulTag,
  previousElementSibling: null,
  nextElementSibling: liTag2,
  textContent: '양파'
};
const liTag2 = {
  tagName: 'li',
  children: [],
  parentElement: ulTag,
  previousElementSibling: liTag1,
  nextElementSibling: null,
  textContent: '피망',
};
const ulTag = {
  tagName: 'ul',
  children: [liTag1, liTag2],
  parentElement: sectionTag,
  previousElementSibling: null,
};

const sectionTag = {
  tagName: 'section',
  children: [ulTag],
  parentElement: bodyTag,
  previousElementSibling: null
};

const bodyTag = {
  tagName: 'body',
  children: [sectionTag],
  parentElement: htmlTag,
  previousElementSibling: headTag
};

const htmlTag = {
  tagName: 'html',
  children: [headTag, bodyTag]
};
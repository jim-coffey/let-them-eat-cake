var React = require('react');
var PropTypes = require('prop-types');

var Cake = require('./Cake');

const CakeWalk = (props) => {
  const { cakes, searchString, saveCake } = props;

  return (
    <ul className="cake-list">
      {
        cakes
          .filter(cake => {
            return cake.title.indexOf(searchString) > -1
                || cake.desc.indexOf(searchString) > -1;
          })
          .map((cake, index) => {
            return (
              <Cake key={cake.id} cake={cake} saveCake={saveCake} />
            );
          })
      }
    </ul>
  );
}

CakeWalk.propTypes = {
  cakes: PropTypes.array.isRequired,
  saveCake: PropTypes.func.isRequired,
  searchString: PropTypes.string
}

module.exports = CakeWalk;

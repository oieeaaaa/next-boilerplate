import './nav.scss';
import componentList from 'styleguide/component-list';

export default () => (
  <ul className="styleguide-nav">
    {componentList.map(({ name }) => (
      <li key={name} className="styleguide-nav__item">{name}</li>
    ))}
  </ul>
);

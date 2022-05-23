export const About = () => {
  return (
    <div className='about'>
      <div className='about__main-title'>
        <h1>About project</h1>
      </div>
      <div className='about__subtitle'>
        <span>
          <strong>Author:</strong> Andrii Malyshev
        </span>
      </div>
      <div className='about__subtitle'>
        <span>
          <strong>Contacts:</strong>
          <a href="mailto:andrey.malyshev.97@gmail.com">andrey.malyshev.97@gmail.com</a>
          <a href="tel:+380993780005">+380993780005</a>
        </span>
      </div>
      <div className='about__subtitle'>
        <span>
          <strong>Tech-stack:</strong> HTML5/CSS3 (SCSS-preprocessor, BEM-methodology, flex-box, adaptive laid)/JS (ES6-7, localStorage)/REACT (context, hooks, react-router)/REDUX
        </span>
      </div>
    </div>
  );
};

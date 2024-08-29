export default function Button({mode = 'filled',Icon,children,...props}) {
    const baseClass = 'button icon-button';
    const modeClass = `button ${mode === 'filled' ? 'filled-button' : ''} ${mode === 'outline' ? 'outline-button' : ''} ${mode === 'text' ? 'text-button' : ''} `;
    const className = `${baseClass} ${modeClass}`;

    return <button className={className} {...props} >
    {Icon && (<span className="button-icon"><Icon /></span>)}
      <span>{children}</span>
      </button>;
 // Todo: Build this component!
 
 // !!! Important: 
 // Wrap the icon with a <span className="button-icon"> to achieve the target look
 // Also wrap the children prop with a <span>
}
// text
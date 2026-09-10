import { type FC, type CSSProperties } from 'react';

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  /** Text color. Defaults to white. */
  color?: string;
  /** Must match whatever is actually behind the text (page/section background),
   * so the shifted ghost layers don't show a mismatched patch. */
  backgroundColor?: string;
  /** Any valid CSS font-size value, e.g. 'clamp(3rem,8vw,6rem)'. */
  fontSize?: string;
  fontWeight?: number | string;
  className?: string;
}

interface CustomCSSProperties extends CSSProperties {
  '--after-duration': string;
  '--before-duration': string;
  '--after-shadow': string;
  '--before-shadow': string;
  '--glitch-color': string;
  '--glitch-bg': string;
  '--glitch-size': string;
  '--glitch-weight': string;
}

const GlitchText: FC<GlitchTextProps> = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  color = '#ffffff',
  backgroundColor = '#191216',
  fontSize = 'clamp(2rem,10vw,8rem)',
  fontWeight = 900,
  className = ''
}) => {
  const inlineStyles: CustomCSSProperties = {
    '--after-duration': `${speed * 3}s`,
    '--before-duration': `${speed * 2}s`,
    '--after-shadow': enableShadows ? '-5px 0 red' : 'none',
    '--before-shadow': enableShadows ? '5px 0 cyan' : 'none',
    '--glitch-color': color,
    '--glitch-bg': backgroundColor,
    '--glitch-size': fontSize,
    '--glitch-weight': String(fontWeight)
  };

  const baseClasses =
    'relative mx-auto select-none cursor-pointer leading-[0.95] ' +
    'text-[color:var(--glitch-color)] text-[length:var(--glitch-size)] font-[number:var(--glitch-weight)]';

  const pseudoClasses = !enableOnHover
    ? "after:content-[attr(data-text)] after:absolute after:top-0 after:left-[10px] after:text-[color:var(--glitch-color)] after:bg-[color:var(--glitch-bg)] after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:[text-shadow:var(--after-shadow)] after:animate-glitch-after " +
      "before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-10px] before:text-[color:var(--glitch-color)] before:bg-[color:var(--glitch-bg)] before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:[text-shadow:var(--before-shadow)] before:animate-glitch-before"
    : "after:content-[''] after:absolute after:top-0 after:left-[10px] after:text-[color:var(--glitch-color)] after:bg-[color:var(--glitch-bg)] after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:opacity-0 " +
      "before:content-[''] before:absolute before:top-0 before:left-[-10px] before:text-[color:var(--glitch-color)] before:bg-[color:var(--glitch-bg)] before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:opacity-0 " +
      'hover:after:content-[attr(data-text)] hover:after:opacity-100 hover:after:[text-shadow:var(--after-shadow)] hover:after:animate-glitch-after ' +
      'hover:before:content-[attr(data-text)] hover:before:opacity-100 hover:before:[text-shadow:var(--before-shadow)] hover:before:animate-glitch-before';

  const combinedClasses = `${baseClasses} ${pseudoClasses} ${className}`;

  return (
    <div style={inlineStyles} data-text={children} className={combinedClasses}>
      {children}
    </div>
  );
};

export default GlitchText;
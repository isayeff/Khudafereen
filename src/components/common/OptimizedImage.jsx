export function OptimizedImage({ 
  src,        // /images/hero (extension olmadan)
  alt, 
  lazy = true,  // default lazy
  className 
}) {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img 
        src={`${src}.jpg`} 
        alt={alt}
        loading={lazy ? "lazy" : undefined}
        className={className}
      />
    </picture>
  );
}
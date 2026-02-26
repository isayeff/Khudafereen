// Reusable Container Component
export function Container({ children, size = 'default', className = '' }) {
  const sizes = {
    sm: 'max-w-3xl',      // 768px
    default: 'max-w-7xl', // 1280px
    lg: 'max-w-screen-2xl', // 1536px
    full: 'max-w-full'
  };
  
  return (
    <div className={`
      container 
      mx-auto 
      px-4 sm:px-6 lg:px-8 
      ${sizes[size]} 
      ${className}
    `}>
      {children}
    </div>
  );
}

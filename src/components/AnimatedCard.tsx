
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'bounceIn';
}

const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0, 
  animation = 'fadeInUp' 
}: AnimatedCardProps) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  const animationClasses = {
    fadeInUp: 'animate-fade-in-up',
    fadeInDown: 'animate-fade-in-down',
    fadeInLeft: 'animate-fade-in-left',
    fadeInRight: 'animate-fade-in-right',
    scaleIn: 'animate-scale-in',
    bounceIn: 'animate-bounce-in',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        hasIntersected 
          ? `${animationClasses[animation]} opacity-100` 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ 
        animationDelay: hasIntersected ? `${delay}ms` : '0ms',
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;

import { ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function ExternalLink({ href, children, className = '', showIcon = false }: ExternalLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    toast({
      title: "🚀 Du skickas till Frost Bygg-appen",
      description: "Du lämnar nu landningssidan och går till vår produktionsapp.",
      duration: 3000,
    });

    // Small delay to show toast before redirect
    setTimeout(() => {
      window.location.href = href;
    }, 800);
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={className}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="ml-1 h-3 w-3 inline-block" />}
    </a>
  );
}

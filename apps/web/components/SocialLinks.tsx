import Github from "@/components/Github";
import Linkedin from "@/components/Linkedin";

type SocialLinksProps = {
  className?: string;
  showLabel?: boolean;
};

export default function SocialLinks({
  className = "",
  showLabel = false,
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showLabel && <span className="text-sm text-white/45">Find me on</span>}
      <Github />
      <Linkedin />
    </div>
  );
}
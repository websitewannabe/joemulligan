
import voteEarlyImg from "/assets/Vote_Early_on_Nov_4th_1751737227767.png";

export default function VoteBadge() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <img 
        src={voteEarlyImg} 
        alt="Vote Early on November 4th" 
        className="w-24 h-24 cursor-pointer shadow-lg hover:scale-105 transition-transform duration-200 shake-animation"
      />
    </div>
  );
}

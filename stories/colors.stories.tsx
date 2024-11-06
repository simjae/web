export default {
  title: 'Utilities/Color',
};

export const Color = ({}) => (
  <div>
    <div className="flex items-center gap-1">
      <div className="bg-primary w-5 h-5" />
      <div className="text-primary">.primary</div>
    </div>

    <div className="flex items-center gap-1">
      <div className="bg-accent w-5 h-5" />
      <div className="text-accent">.accent</div>
    </div>

    <div className="flex items-center gap-1">
      <div className="bg-white w-5 h-5" />
      <div className="text-white">.white</div>
    </div>

    <div className="flex items-center gap-1">
      <div className="bg-disabled w-5 h-5" />
      <div className="text-disabled">.disabled</div>
    </div>
  </div>
);

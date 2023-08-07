const DownIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 0.500001L9.5 0.5L5 5.5L0.5 0.500001Z"
        fill={active ? "#333333" : "var(--gray-gray-2)"}
      />
    </svg>
  );
};

export default DownIcon;

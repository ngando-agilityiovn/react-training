import { Edit } from "~/assets/icons";

const editButton = [
  {
    id: 0,
    icon: <Edit />
  },
  {
    id: 1,
    icon: <Edit />
  },
  {
    id: 2,
    icon: <Edit />
  }
];

export const EditRow: React.FC = (): JSX.Element => {
  return (
    <>
      <h2>Email</h2>
      {editButton.map(({ id, icon }) => (
        <p key={id}>{icon}</p>))}
    </>
  );
};
  
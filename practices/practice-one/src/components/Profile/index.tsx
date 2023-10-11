import { UserInformation } from '..';

const profileUser = [
  {
    id: 0,
    image:
      'https://firebasestorage.googleapis.com/v0/b/brand-1b5b2.appspot.com/o/avatar.png?alt=media&token=4f14512c-7ba6-449e-bbcf-73ebc7a5744f&_gl=1*16umgxq*_ga*ODg4OTAzNjM4LjE2OTY5OTQ2OTk.*_ga_CW55HF8NVT*MTY5Njk5NDY5OS4xLjEuMTY5Njk5NDc5OC41My4wLjA.',
    title: 'John Doe',
    alt: "John Doe's Image",
    description: 'A brief description of John Doe.'
  },
  {
    id: 1,
    image:
      'https://firebasestorage.googleapis.com/v0/b/brand-1b5b2.appspot.com/o/avatar.png?alt=media&token=4f14512c-7ba6-449e-bbcf-73ebc7a5744f&_gl=1*16umgxq*_ga*ODg4OTAzNjM4LjE2OTY5OTQ2OTk.*_ga_CW55HF8NVT*MTY5Njk5NDY5OS4xLjEuMTY5Njk5NDc5OC41My4wLjA.',
    title: 'John Doe',
    alt: "John Doe's Image",
    description: 'A brief description of John Doe.'
  },
  {
    id: 2,
    image:
      'https://firebasestorage.googleapis.com/v0/b/brand-1b5b2.appspot.com/o/avatar.png?alt=media&token=4f14512c-7ba6-449e-bbcf-73ebc7a5744f&_gl=1*16umgxq*_ga*ODg4OTAzNjM4LjE2OTY5OTQ2OTk.*_ga_CW55HF8NVT*MTY5Njk5NDY5OS4xLjEuMTY5Njk5NDc5OC41My4wLjA.',
    title: 'John Doe',
    alt: "John Doe's Image",
    description: 'A brief description of John Doe.'
  }
];

export const Profile: React.FC = (): JSX.Element => {
  return (
    <>
      <h2>User</h2>
      <p>
        {profileUser.map(({ id, image, title, alt, description }) => (
          <UserInformation key={id} image={image} title={title} alt={alt} description={description} />
        ))}
      </p>
    </>
  );
};

import { TAG_COLORS } from '~/types';
import { Tag, UserInformation } from '..';

// styles
import infoStyle from './index.module.css';

const profileUser = [
  {
    id: 0,
    image:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F014%2F194%2F215%2Foriginal%2Favatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg&tbnid=DygUyFj3vCP-NM&vet=12ahUKEwjNmdS66d2BAxXuXvUHHUqUCu0QMygEegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F14194215-avatar-icon-human-a-person-s-badge-vector-social-media-profile-symbol-the-symbol-of-a-person&docid=0cxq_JqEIAYAsM&w=1920&h=1920&q=avatar%20icon&ved=2ahUKEwjNmdS66d2BAxXuXvUHHUqUCu0QMygEegQIARB1',
    title: 'John Doe',
    alt: "John Doe's Image",
    description: 'A brief description of John Doe.'
  },
  {
    id: 1,
    image:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F014%2F194%2F215%2Foriginal%2Favatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg&tbnid=DygUyFj3vCP-NM&vet=12ahUKEwjNmdS66d2BAxXuXvUHHUqUCu0QMygEegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F14194215-avatar-icon-human-a-person-s-badge-vector-social-media-profile-symbol-the-symbol-of-a-person&docid=0cxq_JqEIAYAsM&w=1920&h=1920&q=avatar%20icon&ved=2ahUKEwjNmdS66d2BAxXuXvUHHUqUCu0QMygEegQIARB1',
    title: 'John Doe',
    alt: "John Doe's Image",
    description: 'A brief description of John Doe.'
  },
  {
    id: 2,
    image:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F014%2F194%2F215%2Foriginal%2Favatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg&tbnid=DygUyFj3vCP-NM&vet=12ahUKEwjNmdS66d2BAxXuXvUHHUqUCu0QMygEegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F14194215-avatar-icon-human-a-person-s-badge-vector-social-media-profile-symbol-the-symbol-of-a-person&docid=0cxq_JqEIAYAsM&w=1920&h=1920&q=avatar%20icon&ved=2ahUKEwjNmdS66d2BAxXuXvUHHUqUCu0QMygEegQIARB1',
    title: 'John Doe',
    alt: "John Doe's Image",
    description: 'A brief description of John Doe.'
  }
];

const email = [
  {
    id: 0,
    email: 'example@gmail.com'
  },
  {
    id: 1,
    email: 'example@gmail.com'
  },
  {
    id: 2,
    email: 'example@gmail.com'
  }
];

const phone = [
  {
    id: 0,
    phone: '0987654345'
  },
  {
    id: 1,
    phone: '09876543456'
  },
  {
    id: 2,
    phone: '09876543456'
  }
];

const tag = [
  {
    id: 0,
    title: 'status',
    color: TAG_COLORS.PURPLE
  },
  {
    id: 1,
    title: 'status',
    color: TAG_COLORS.PURPLE
  },
  {
    id: 2,
    title: 'status',
    color: TAG_COLORS.PURPLE
  }
];

const Info: React.FC = (): JSX.Element => {
  return (
    <div className={infoStyle.info}>
      <div>
        {profileUser.map(({ id, image, title, alt, description }) => (
          <UserInformation key={id} image={image} title={title} alt={alt} description={description} />
        ))}
      </div>

      <div>
        {email.map(({ id, email }) => (
          <p key={id}>{email}</p>
        ))}
      </div>

      <div>
        {phone.map(({ id, phone }) => (
          <p key={id}>{phone}</p>
        ))}
      </div>

      <div>
        {tag.map(({ id, title, color }) => (
          <Tag key={id} color={color} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Info;

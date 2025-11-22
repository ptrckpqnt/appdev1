export default function Avatar() {
  return (
    <>
    <h3>Static</h3>
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
    <h3>Dynamic</h3>
    <Avatar2/>
    </>
  );
}

function Avatar2() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}


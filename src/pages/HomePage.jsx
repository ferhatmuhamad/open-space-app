import React, { useEffect } from 'react';
import TalkInput from '../components/TalkInput';
import TalksList from '../components/TalksList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddTalk, asyncToogleLikeTalk } from '../states/talks/action';
import { asyncPopulateUsersAndTalks } from '../states/shared/action';

function HomePage() {
  /**
   * Bisa gunakan seperti ini tapi ini bad practice
   * const { talks = [], users = [], authUser } = useSelector((states) => states);
   */
  const talks = useSelector((states) => states.talks); // @TODO: get authUser and isPreLoad states from store
  const users = useSelector((states) => states.users); // @TODO: get authUser and isPreLoad states from store
  const authUser = useSelector((states) => states.authUser); // @TODO: get authUser and isPreLoad states from store

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to populate talks and users data
    dispatch(asyncPopulateUsersAndTalks());
  }, [dispatch]);

  const onAddTalk = (text) => {
    // @TODO: dispatch async action to add talk
    dispatch(asyncAddTalk({ text }));
  };

  const onLike = (id) => {
    // @TODO: dispatch async action to toggle like talk
    dispatch(asyncToogleLikeTalk(id));
  };

  const talkList = talks.map((talk) => ({
    ...talk,
    user: users.find((user) => user.id === talk.user),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <TalkInput addTalk={onAddTalk} />
      <TalksList talks={talkList} like={onLike} />
    </section>
  );
}

export default HomePage;
// 38. Pindah ke DetailPage.jsx

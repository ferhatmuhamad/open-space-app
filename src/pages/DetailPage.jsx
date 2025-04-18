import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TalkDetail from '../components/TalkDetail';
import TalkItem from '../components/TalkItem';
import TalkReplyInput from '../components/TalkReplyInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncReceiveTalkDetail,
  asyncToogleLikeTalkDetail,
} from '../states/talkDetail/action';
import { asyncAddTalk } from '../states/talks/action';

function DetailPage() {
  const { id } = useParams();

  /**
   * Bisa gunakan seperti ini tapi ini bad practice
   * const { talkDetail = null, authUser } = useSelector((states) => states);
   */
  const talkDetail = useSelector((states) => states.talkDetail); // @TODO: get talkDetail and authUser state from store
  const authUser = useSelector((states) => states.authUser); // @TODO: get talkDetail and authUser state from store

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to get talk detail by id
    dispatch(asyncReceiveTalkDetail(id));
  }, [id, dispatch]);

  const onLikeTalk = () => {
    // @TODO: dispatch async action to toggle like talk detail
    dispatch(asyncToogleLikeTalkDetail);
  };

  const onReplyTalk = (text) => {
    // @TODO: dispatch async action to add reply talk
    dispatch(asyncAddTalk({ text, replyTo: id }));
  };

  if (!talkDetail) {
    return null;
  }

  return (
    <section className="detail-page">
      {talkDetail.parent && (
        <div className="detail-page__parent">
          <h3>Replying To</h3>
          <TalkItem {...talkDetail.parent} authUser={authUser.id} />
        </div>
      )}
      <TalkDetail
        {...talkDetail}
        authUser={authUser.id}
        likeTalk={onLikeTalk}
      />
      <TalkReplyInput replyTalk={onReplyTalk} />
    </section>
  );
}

export default DetailPage;

// 39. Untuk isPreload install npm install react-redux-loading-bar
// 40. Buka berkas src/states/index.js

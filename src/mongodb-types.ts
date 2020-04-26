import { ObjectID } from 'mongodb';
import Maybe from 'graphql/tsutils/Maybe';

export type UserDbObject = {
  _id: ObjectID,
  firstName: string,
  lastName: string,
  email?: string,
  following?: Maybe<Array<Maybe<UserDbObject['_id']>>>,
};

export type PostDbObject = {
  _id: ObjectID,
  title: string,
  content: string,
  author: UserDbObject['_id'],
  publishedAt?: Date,
  likedBy?: Maybe<Array<Maybe<UserDbObject['_id']>>>,
};
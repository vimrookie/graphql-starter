export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  UnsignedInt: any;
};












export type User = {
   __typename?: 'User';
  /** User ID. */
  id: Scalars['ID'];
  /** User's first name. */
  firstName: Scalars['String'];
  /** User's last name. */
  lastName: Scalars['String'];
  /** User's e-mail address. */
  email?: Maybe<Scalars['EmailAddress']>;
  /** Posts published by user. */
  posts?: Maybe<Array<Maybe<Post>>>;
  /** Users that this user is following. */
  following?: Maybe<Array<Maybe<User>>>;
  /** Users that this user is followed by. */
  followers?: Maybe<Array<Maybe<User>>>;
};

export type Post = {
   __typename?: 'Post';
  /** Post ID. */
  id: Scalars['ID'];
  /** Post title. */
  title: Scalars['String'];
  /** Post content. */
  content: Scalars['String'];
  /** Post Author. */
  author: User;
  /** Post published timestamp. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Users who like this post. */
  likedBy?: Maybe<Array<Maybe<User>>>;
};

export type Query = {
   __typename?: 'Query';
  /** Get post by ID. */
  post?: Maybe<Post>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};

/** Publish post input. */
export type PublishPostInput = {
  /** Post title. */
  title: Scalars['String'];
  /** Post content. */
  content: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  /** Publish post. */
  publishPost: Post;
  /**
   * Follow user.
   * Returns the updated number of followers.
   */
  followUser: Scalars['UnsignedInt'];
  /**
   * Unfollow user.
   * Returns the updated number of followers.
   */
  unfollowUser: Scalars['UnsignedInt'];
  /**
   * Like post.
   * Returns the updated number of likes received.
   */
  likePost: Scalars['UnsignedInt'];
};


export type MutationPublishPostArgs = {
  input: PublishPostInput;
};


export type MutationFollowUserArgs = {
  userId: Scalars['ID'];
};


export type MutationUnfollowUserArgs = {
  userId: Scalars['ID'];
};


export type MutationLikePostArgs = {
  postId: Scalars['ID'];
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

import { ObjectID } from 'mongodb';
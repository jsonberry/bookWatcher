BEGIN TRANSACTION;

INSERT INTO Books
VALUES (
    '2017-06-27',
    '2017-06-19',
    167,
    167,
    '2017-05-24',
    'DONE',
    'Blind Spot: Hidden Biases of Good People',
    null
);

INSERT INTO Books
VALUES (
    '2017-07-30',
    '2017-07-20',
    274,
    274,
    '2017-06-27',
    'DONE',
    'The Man in The High Castle',
    'Philip K. Dick'
);

INSERT INTO Books
VALUES (
    '2017-07-30',
    '2017-07-18',
    271,
    271,
    '2017-06-27',
    'DONE',
    'No is Not Enough',
    null
);

INSERT INTO Books
VALUES (
    '2017-07-01',
    '2017-06-26',
    341,
    341,
    '2017-05-24',
    'DONE',
    'Player Piano',
    'Kurt Vonnegut'
);

INSERT INTO Books
VALUES (
    '2017-08-27',
    '2017-07-21',
    259,
    259,
    '2017-07-20',
    'DONE',
    'The Pragmatic Programmer',
    null
);

INSERT INTO Books
VALUES (
    '2017-07-01',
    '2017-06-20',
    151,
    151,
    '2017-05-24',
    'DONE',
    'Race Matters',
    'Cornel West'
);

COMMIT;

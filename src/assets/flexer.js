export const flexer = (direction, wrap, justify, align) => ({
  display: 'flex',
  flexFlow: `${direction} ${wrap}`,
  justifyContent: justify,
  alignItems: align,
});

export const flexRow = (wrap, justify, align) => ({
  display: 'flex',
  flexFlow: `row ${wrap}`,
  justifyContent: justify,
  alignItems: align,
});
export const flexColumn = (wrap, justify, align) => ({
  display: 'flex',
  flexFlow: `column ${wrap}`,
  justifyContent: justify,
  alignItems: align,
});

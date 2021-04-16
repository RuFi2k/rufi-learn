import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DetailsTitle, ThemeActions } from "../components";
import UsefulLink from "../components/UsefulLink";
import { MainLayout } from "../layouts";

const useStyles = makeStyles({
  wrapper: {
    paddingBottom: 52,
    position: 'relative',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    left: 0,
    background: '#F2F2F2',
  },
  description: {
    fontSize: '20px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    borderTop: '1px solid #C4C4C4',
    width: '100%',
    padding: '14px 24px',
    background: '#F2F2F2',
  }
});

const themes = [
  {
    id: '1',
    title: 'HTML',
    description: 'htmldesc',
    links: ['1','2','3',
    '1','2','3',
    '1','2','3',
    '1','2','3',
    '1','2','3',
    '1','2','3',
    '1','2','3',
    '1','2','3',
    '1','2','3',
    '1','2','3',
    '1','2','3',
    '1','2','3',
    '1','2','3',
    '1','2','3',],
    author: 'RuFi',
    createdAt: '2020-1-1T20:20:20Z'
  },
  {
    id: '2',
    title: 'CSS',
    description: 'cssdesc',
    links: ['1','2','3'],
    author: 'RuFi',
    createdAt: '2020-1-1T20:20:20Z'
  },
  {
    id: '1',
    title: 'JS',
    description: 'jsdesc',
    links: ['1','2','3'],
    author: 'RuFi',
    createdAt: '2020-1-1T20:20:20Z'
  }
];

const ThemeDetails = (): JSX.Element => {
  const classes = useStyles();
  const params = useParams<{ id: string }>();

  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    setItem(themes.find(x => x.id === params.id));
    // eslint-disable-next-line
  }, [])
  
  return <MainLayout>
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <DetailsTitle title={item?.title || 'No title available'} />
        <ThemeActions />
      </div>
      <p className={classes.description}>{item?.description}</p>
      <h2>Useful links</h2>
      <div className={classes.links}>
        {item?.links.map((link: string) => (
          <UsefulLink key={link} text={link} />
        ))}
      </div>
      <div className={classes.footer}>
          Authored by {item?.author}, {item?.createdAt}
      </div>
    </div>
  </MainLayout>
}

export default ThemeDetails;

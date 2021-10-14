import React, { Component } from 'react';
import axios from 'axios';
import { POKEMON_API_URL } from '../config';
import {
  Box,
  CircularProgress,
  Grid,
  withStyles,
  Typography,
  Button,
} from '@material-ui/core';
import { FavoriteIcon } from '@material-ui/icons/Favorite';

const styles = (theme) => ({
  pokedexContainer: {
    height: '84vh',
    backgroundColor: 'black',
    color: 'white',
    marginTop: 75,
    textAlign: 'center',
    borderRadius: 5,
    paddingTop: 30,
  },
  textTitle: {
    textTransform: 'upperCase',
    fontFamily: 'Fantasy',
  },
  pokemonImage: {
    width: '170px',
    height: '170px',
  },
  pokedexInfoContainer: {
    bottom: 60,
    position: 'absolute',
    width: '100%',
  },
  separator: {
    height: '0.01mm',
    width: '95%',
  },
  favorite: {
    height: 50,
    width: 50,
    marginTop: 15,
  },
  text: {
    fontSize: 30,
  },
});
class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    const { id } = match?.params;
    axios.get(POKEMON_API_URL + '/' + id).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        this.setState({ pokemon: response.data });
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { pokemon } = this.state;
    if (pokemon) {
      const { name, sprites } = pokemon;
      return (
        <Box>
          <Box className={classes.pokedexContainer}>
            <Typography className={classes.textTitle} variant="h1">
              {name}
            </Typography>
            <img className={classes.pokemonImage} src={sprites.front_default} />
            <Box className={classes.pokedexInfoContainer}>
              <hr className={classes.separator} />
              <Grid container>
                <Grid item md={1}>
                  <Button className={classes.favorite}>
                    <FavoriteIcon style={{ color: 'white', fontSize: 40 }} />
                  </Button>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Name
                    <br />
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      );
    } else {
      return <CircularProgress />;
    }
  }
}

export default withStyles(styles)(PokemonDetails);

import click 

@click.command()
def pomPom() {
    while (1):
        click.secho("PON PON ", fg="blue")
}

if __name__ == "__main__" 
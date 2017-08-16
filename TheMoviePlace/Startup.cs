using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TheMoviePlace.Startup))]
namespace TheMoviePlace
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

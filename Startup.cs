using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EducationMind.Startup))]
namespace EducationMind
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

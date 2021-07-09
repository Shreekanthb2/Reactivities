using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application
{
    public class Create
    {
        public class Commmand:IRequest{
            public Activity Activity { get; set; } 
        }

        public class Handler : IRequestHandler<Commmand>
        {
            private readonly DataContext _dataContext;

            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }
            public async Task<Unit> Handle(Commmand request, CancellationToken cancellationToken)
            {
                _dataContext.Activities.Add(request.Activity);
                await _dataContext.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
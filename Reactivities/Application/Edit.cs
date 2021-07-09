using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistance;

namespace Application
{
    public class Edit
    {
        public class Command:IRequest{
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _dataContext;
            private IMapper _mapper;

            public Handler(DataContext dataContext, IMapper mapper)
            {
                _dataContext = dataContext;
                _mapper = mapper;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity =await _dataContext.Activities.FindAsync(request.Activity.Id);
                _mapper.Map(request.Activity, activity);
                await _dataContext.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}